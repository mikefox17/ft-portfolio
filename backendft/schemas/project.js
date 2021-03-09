export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'date',
            type: 'datetime',
        },
        {
            name: 'image',
            type: 'image',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'link',
            type: 'url',
        },
        {
            name: 'description',
            type: 'blockContent',
        },
    ],
};
