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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
  ],
}
