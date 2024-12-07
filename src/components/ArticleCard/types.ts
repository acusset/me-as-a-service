interface Tag {
  id: string
  name: string
}

export interface Article {
  id: string
  title: string
  preview: string
  tags: Tag[]
}

