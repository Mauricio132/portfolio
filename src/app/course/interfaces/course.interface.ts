export interface CourseSmall {
  _id: string;
  about: string;
  module: string;
  Link_Download: string;
  title: string;
}

export interface Course {
  capture: Capture[];
  _id: string;
  about: string;
  module: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  Link_Download: string;
  title: string;
  id: string;
}

export interface Capture {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: Formats;
  provider: string;
  related: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export enum EXT {
  PNG = '.png',
}

export interface Formats {
  thumbnail: Medium;
  medium: Medium;
  small: Medium;
}

export interface Medium {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export enum MIME {
  ImagePNG = 'image/png',
}
