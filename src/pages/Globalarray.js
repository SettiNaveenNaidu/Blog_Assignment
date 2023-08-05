import React, { createContext, useState } from 'react';

const ArrayContext=createContext()

const ArrayProvider=({children})=>{
    
    const array=[{
        id:'1',
        author:'naveen',
        title: "How to make friends",
        topic: "FriendShip",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus aliquid dicta, iure eius quas omnis non impedit, ullam repellendus neque, reprehenderit sit maxime. Asperiores, est reprehenderit? Veritatis nihil sit fugiat ab molestiae obcaecati iusto quis quos reiciendis eum iste enim eaque aut rerum impedit sequi, distinctio pariatur voluptas culpa esse. Aperiam natus velit reiciendis ipsam. Rerum beatae omnis, ullam illo explicabo laborum quibusdam vero, mollitia aliquam facere odio a, inventore officiis vitae. Id vitae qui cum laudantium recusandae libero modi fuga itaque vel consequuntur quaerat, dolore placeat at! Nemo sapiente eaque asperiores esse quis, nisi perferendis quam earum tempore.',
        views: 5,
        created_at: "29-Jan-2019",
        image_url: './image1.jpg'
    },
    {
        id:'2',
        author:'naidu',
        title: "How to be happy",
        topic: "Development",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus aliquid dicta, iure eius quas omnis non impedit, ullam repellendus neque, reprehenderit sit maxime. Asperiores, est reprehenderit? Veritatis nihil sit fugiat ab molestiae obcaecati iusto quis quos reiciendis eum iste enim eaque aut rerum impedit sequi, distinctio pariatur voluptas culpa esse. Aperiam natus velit reiciendis ipsam. Rerum beatae omnis, ullam illo explicabo laborum quibusdam vero, mollitia aliquam facere odio a, inventore officiis vitae. Id vitae qui cum laudantium recusandae libero modi fuga itaque vel consequuntur quaerat, dolore placeat at! Nemo sapiente eaque asperiores esse quis, nisi perferendis quam earum tempore.',
        views: 10,
        created_at: "29-Dec-2019",
        image_url: './image1.jpg'
    },
    {
        id:'3',
        author:'setti',
        title: "How to be happy",
        topic: "Technology",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus aliquid dicta, iure eius quas omnis non impedit, ullam repellendus neque, reprehenderit sit maxime. Asperiores, est reprehenderit? Veritatis nihil sit fugiat ab molestiae obcaecati iusto quis quos reiciendis eum iste enim eaque aut rerum impedit sequi, distinctio pariatur voluptas culpa esse. Aperiam natus velit reiciendis ipsam. Rerum beatae omnis, ullam illo explicabo laborum quibusdam vero, mollitia aliquam facere odio a, inventore officiis vitae. Id vitae qui cum laudantium recusandae libero modi fuga itaque vel consequuntur quaerat, dolore placeat at! Nemo sapiente eaque asperiores esse quis, nisi perferendis quam earum tempore.',
        views: 10,
        created_at: "29-Dec-2019",
        image_url: './image1.jpg'
    },
    {
        id:'4',
        author:'prabjyot',
        title: "How to be happy",
        topic: "Health",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus aliquid dicta, iure eius quas omnis non impedit, ullam repellendus neque, reprehenderit sit maxime. Asperiores, est reprehenderit? Veritatis nihil sit fugiat ab molestiae obcaecati iusto quis quos reiciendis eum iste enim eaque aut rerum impedit sequi, distinctio pariatur voluptas culpa esse. Aperiam natus velit reiciendis ipsam. Rerum beatae omnis, ullam illo explicabo laborum quibusdam vero, mollitia aliquam facere odio a, inventore officiis vitae. Id vitae qui cum laudantium recusandae libero modi fuga itaque vel consequuntur quaerat, dolore placeat at! Nemo sapiente eaque asperiores esse quis, nisi perferendis quam earum tempore.',
        views: 10,
        created_at: "29-Dec-2019",
        image_url: './image1.jpg'
    },
    {
        id:'5',
        author:'sudan',
        title: "How to be happy",
        topic: "Detox",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus aliquid dicta, iure eius quas omnis non impedit, ullam repellendus neque, reprehenderit sit maxime. Asperiores, est reprehenderit? Veritatis nihil sit fugiat ab molestiae obcaecati iusto quis quos reiciendis eum iste enim eaque aut rerum impedit sequi, distinctio pariatur voluptas culpa esse. Aperiam natus velit reiciendis ipsam. Rerum beatae omnis, ullam illo explicabo laborum quibusdam vero, mollitia aliquam facere odio a, inventore officiis vitae. Id vitae qui cum laudantium recusandae libero modi fuga itaque vel consequuntur quaerat, dolore placeat at! Nemo sapiente eaque asperiores esse quis, nisi perferendis quam earum tempore.',
        views: 10,
        created_at: "29-Dec-2019",
        image_url: './image1.jpg'
    },
    {
        id:'6',
        author:'singh',
        title: "How to be happy",
        topic: "Happiness",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus aliquid dicta, iure eius quas omnis non impedit, ullam repellendus neque, reprehenderit sit maxime. Asperiores, est reprehenderit? Veritatis nihil sit fugiat ab molestiae obcaecati iusto quis quos reiciendis eum iste enim eaque aut rerum impedit sequi, distinctio pariatur voluptas culpa esse. Aperiam natus velit reiciendis ipsam. Rerum beatae omnis, ullam illo explicabo laborum quibusdam vero, mollitia aliquam facere odio a, inventore officiis vitae. Id vitae qui cum laudantium recusandae libero modi fuga itaque vel consequuntur quaerat, dolore placeat at! Nemo sapiente eaque asperiores esse quis, nisi perferendis quam earum tempore.',
        views: 10,
        likes:50,
        created_at: "29-Dec-2019",
        image_url: './image1.jpg'
    }
]

   
    return(
        <ArrayContext.Provider value={{array}}>
            {children}
        </ArrayContext.Provider>
    )
}

export  {ArrayContext,ArrayProvider}