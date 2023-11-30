import { updateIssuersRequestDTO } from '@/domain/issuers/issuers.schema';
declare const updateUsersUseCase: (issuer: updateIssuersRequestDTO) => Promise<void>;
export default updateUsersUseCase;
