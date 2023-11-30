import { validateSchema } from '@/common/utils/validateSchema'
import { kitRequestSchema, BulkKitsRequest } from '../../kits.schema'
import { createBulkKits } from '@/data-access/kits.repo'
import {
  createKitsUploadLedger,
  updateKitsUploadLedger
} from '@/data-access/kits-uploads-ledger.repo'
import { PROCESS_STATUS } from '@/common/constants'

const createBulkKitsUseCase = async (kitsList: BulkKitsRequest) => {
  validateSchema(kitRequestSchema, kitsList)

  const kitsUploadLedger = {
    storageLink: 'https://www.google.com',
    modifiedAt: Date.now(),
    remark: PROCESS_STATUS.INITIATED.toString(),
    status: PROCESS_STATUS.INITIATED.toString()
  }
  const createKitsUploadLedgerPromise = createKitsUploadLedger(kitsUploadLedger)
  let kitsUploadLedgerRemark
  let bulkKitsRes
  try {
    bulkKitsRes = await createBulkKits(kitsList)
  } catch (err) {
    kitsUploadLedgerRemark = err
  }

  let kitsUploadLedgerStatus

  if (bulkKitsRes && bulkKitsRes.insertedCount === kitsList.length) {
    kitsUploadLedgerStatus = PROCESS_STATUS.SUCCESSFUL.toString()
    kitsUploadLedgerRemark = PROCESS_STATUS.SUCCESSFUL.toString()
  } else {
    kitsUploadLedgerStatus = PROCESS_STATUS.FAILED.toString()
  }

  const [kitsUploadLedgerRes] = await Promise.all([
    createKitsUploadLedgerPromise
  ])

  await updateKitsUploadLedger(kitsUploadLedgerRes._id, {
    status: kitsUploadLedgerStatus,
    modifiedAt: Date.now(),
    remark: kitsUploadLedgerRemark
  })
}

export default createBulkKitsUseCase
