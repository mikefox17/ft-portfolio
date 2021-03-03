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
            name: 'description',
            type: 'blockContent',
        },
    ],
};
