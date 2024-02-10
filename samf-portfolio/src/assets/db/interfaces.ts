import type { RouteParamsRaw } from "vue-router"

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
  description: string,
  keywords?: KeyWord[]
}

export interface KeyWord {
  word: string,
  route_name: string,
  params: RouteParamsRaw
}

export interface Project {
  name: string,
  company: number, // references Experience
  description: string,
  images?: ProjectImage[],
  tools: string[]
}

export interface ProjectImage {
  source: string,
  caption: string
}