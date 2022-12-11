export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'image_url',
      title: 'Image Url',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'About Text',
      type: 'array',
      of: [
        {
          title: 'About Text',
          type: 'object',
          fields: [
            {
              name: 'paragraph',
              title: 'Paragraph',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'button',
      title: 'Button',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
  ],
}
