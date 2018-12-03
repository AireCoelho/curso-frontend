let posts = [
    {
        id: 1,
        date: " 21/11/2018",
        title: " Meu Primeiro Post",
        author: " Joe",
        intro: "Neste post eu apresento as 5 coisas que todo programador frontend precisa saber mas que as escolas não ensinam...",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor, velit vel gravida egestas, libero est efficitur turpis, a imperdiet ex nunc in purus. Vivamus posuere, turpis ut hendrerit ornare, purus odio tincidunt nibh, id eleifend lectus leo ac nisi. Curabitur nunc lacus, eleifend a lacus eu,accumsan semper turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed leo dolor, pulvinar at aliquam vel, placerat eget nisl. In vitae odio sed nulla sollicitudin euismod. Pellentesque rutrum in diam venenatis pellentesque. Etiam laoreet maximus augue non semper. Donec et accumsan arcu, sed aliquet tellus. Ut iaculis purus massa, et convallis metus ultrices id. Vivamus vitae mattis diam. Nam maximus ac sapien et ullamcorper. Proin sit amet ante eget ex congue placerat. Maecenas feugiat hendrerit libero id egestas. Quisque et aliquam ligula. `
    },
    {
        id: 2,
        date: " 21/11/2018",
        title: " Meu Segundo Post",
        author: " Joe",
        intro: "Neste post eu apresento as outras 9 coisas que todo programador frontend precisa saber mas que as escolas não ensinam...",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor, velit vel gravida egestas, libero est efficitur turpis, a imperdiet ex nunc in purus. Vivamus posuere, turpis ut hendrerit ornare, purus odio tincidunt nibh, id eleifend lectus leo ac nisi. Curabitur nunc lacus, eleifend a lacus eu,accumsan semper turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed leo dolor, pulvinar at aliquam vel, placerat eget nisl. In vitae odio sed nulla sollicitudin euismod. Pellentesque rutrum in diam venenatis pellentesque. Etiam laoreet maximus augue non semper. Donec et accumsan arcu, sed aliquet tellus. Ut iaculis purus massa, et convallis metus ultrices id. Vivamus vitae mattis diam. Nam maximus ac sapien et ullamcorper. Proin sit amet ante eget ex congue placerat. Maecenas feugiat hendrerit libero id egestas. Quisque et aliquam ligula. `
    },
    
];

const buscarTodos = ()=>{
    return posts;
}

const buscarPorId = (id)=>{
    return posts.find(post => id == post.id);
}

const PostService = {
    buscarTodos,
    buscarPorId
}

export default PostService;