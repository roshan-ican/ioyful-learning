declare const createBulkKitsUseCase: (kitsList: {
    kit_type: "PHYSICAL" | "VIRTUAL";
    kit_number: string;
}[]) => Promise<void>;
export default createBulkKitsUseCase;
