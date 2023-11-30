import { QueryOptions } from '@/common/types'
import { getClientsByIssuers } from '@/data-access/clients.repo'
import { getIssuerByName } from '@/data-access/issuers.repo'
import { getPrefundsByIssuer } from '@/data-access/prefund.repo'
import { client } from '@/domain/client/client.schema'

enum issuerNames {
  TRANSCORP = 'TRANSCORP',
  SBM = 'SBM',
  YES = 'YES'
}

const getClientByIssuerId = async (
  queryOptions: QueryOptions & Partial<client>,
  issuerName: string
) => {
  if (
    !(
      issuerName === issuerNames.YES ||
      issuerName === issuerNames.TRANSCORP ||
      issuerName === issuerNames.SBM
    )
  ) {
    throw new Error('Invalid issuer name : ' + Object.values(issuerNames))
  }

  const issuer = await getIssuerByName(issuerName)

  if (!issuer) {
    throw new Error('Error while fetching issuers')
  }

  const client = await getClientsByIssuers(issuer)

  const prefundsList = await getPrefundsByIssuer(queryOptions, client)

  if (!prefundsList) {
    throw new Error('Error in fetching clients')
  }
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
  console.log(prefundsList)
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
  return prefundsList
}

export default getClientByIssuerId
