export interface Course {
  code: string,
  fullName: string,
  description: string,
  brief: string,
  semester: string,
  in_progress?: boolean,
  img?: string
}

export interface Experience {
  title: string,
  company: string,
  location: string,
  website: string,
  logo: string,
  start_date: Date,
  end_date?: Date,
  brief: string,
  description: string
}