import { CollectionConfig } from 'payload'

const Papers: CollectionConfig = {
  slug: 'papers',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'tag', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'pdf', type: 'upload', relationTo: 'media' },
    { name: 'publishedAt', type: 'date', required: true },
  ],
}

export default Papers
