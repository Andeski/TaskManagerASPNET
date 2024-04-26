// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface Task {
    Id: number;
    Name: string;
    Content: string;
    StartDate: Date;
    EndDate: Date;
    Tags: number;
    Status: number;
    ActivityId: number;
}

//Define interfaces for Status, Activity, and Tag if they are used in the Task class
/*
export interface Status {
    Id: number;
    Title: string;
    Style: string;
}
*/
export interface Activity {
    Id: number;
}
/*
export interface Tag {
    Id: number;
}
*/