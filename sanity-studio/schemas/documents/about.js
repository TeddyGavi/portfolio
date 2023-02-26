export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'short',
      title: 'Short tagline',
      type: 'string',
    },
    {
      name: 'second',
      title: 'secondary tagLine',
      type: 'string',
    },
    {
      name: 'pun',
      title: 'Puns',
      type: 'array',
      of: [{type: 'string'}],
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
      name: 'body',
      title: 'About',
      type: 'richText',
    },
    {
      name: 'gitHub',
      title: 'Github Profile',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter Link',
      type: 'url',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn Link',
      type: 'url',
    },
    {
      name: 'discord',
      title: 'Discord UserName Link',
      type: 'url',
    },
    {
      name: 'resume',
      title: 'Resume Link',
      type: 'url',
    },
    {
      name: 'mastodon',
      title: 'Mastodon',
      type: 'url',
    },
  ],
}
