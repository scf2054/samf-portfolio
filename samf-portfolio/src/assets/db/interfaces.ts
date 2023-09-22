export interface Course {
  code: string,
  fullName: string,
  description: string,
  brief: string,
  semester: string,
  in_progress?: boolean
}