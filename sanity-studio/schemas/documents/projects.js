export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(25).warning('Keep it short'),
    },
    {
      name: 'about',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: 'imageList',
      title: 'Images',
      type: 'gallery',
    },
    {
      name: 'gitHub',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'deployedUrl',
      title: 'Deployed Url?',
      type: 'url',
    },
    {
      name: 'detailed',
      title: 'Tell a Story',
      description: 'This is the place to tell the story of the app, shown on the details page',
      type: 'richText',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'use this in details',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    },
  ],
}
