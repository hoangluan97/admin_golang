export interface Request {
    id: String;
    request_type: String;
    first_name: String;
    last_name: String;
    email: String;
    company: String;
    research_interests: String;
    note: String;
    read_status: boolean;
    marker: string,
    marked_at: number,
    
}

export interface RequestStore {
    data: Request[];
    filter: any;
}
