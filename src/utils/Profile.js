/**
* This is the collection of the cards.
* Structure to add a new one (or to understand how I call them in the App):
* bird = [{name:'...',
*         fact:'...',
*         description:'...',
*         image:'...',
*         list:[ [...],
*                [...] ]
*         }];
**/

export const bird = [

  { name: 'House Sparrow',
    fact: 'The house sparrow is a very social bird. It is gregarious at all seasons when feeding, often forming flocks with other types of birds.',
    description: 'The house sparrow is a bird of the sparrow family Passeridae, found in most parts of the world. The house sparrow can be confused with a number of other seed-eating birds, especially its relatives in the genus Passer. The house sparrow originated in the Middle East and spread, along with agriculture, to most of Eurasia and parts of North Africa.',
    image: './images/sparrow.jpg',
    list: [
      ['Scientific Name','Average Size','Feeding','Weight'],
      ['Passer domesticus','16 cm (6.3 in)','Seeds about 90%',' 24 to 39.5 g (0.85 to 1.39 oz)']
    ]},

    { name: 'European Greenfinch',
      fact: 'It is a bright, colourful and stocky garden bird with a highly distinctive forked tail. It is mainly resident, but some northernmost populations migrate further south.',
      description: 'The natural range of the Greenfinch is Europe, North Africa, the Middle East and western Asia. It is similar in size and shape to a house sparrow, but is mainly green, with yellow in the wings and tail. The female and young birds are duller and have brown tones on the back. The bill is thick and conical.',
      image: './images/greenfinch.jpg',
      list: [
        ['Scientific Name','Average Size','Feeding','Weight'],
        ['Chloris chloris','15 cm (5.9 in)','Seeds, berries',' 25 to 32 g (0.88 to 1.13 oz)']
      ]},

      { name: 'Common Blackbird',
        fact: 'The male common blackbird defends its breeding territory, chasing away other males or utilising a "bow and run" threat display. This consists of a short run, the head first being raised and then bowed with the tail dipped simultaneously.',
        description: 'The male is all black except for a yellow eye-ring and bill and has a rich, melodious song; the adult female and juvenile have mainly dark brown plumage. This species breeds in woods and gardens, building a neat, mud-lined, cup-shaped nest. It is omnivorous, eating a wide range of insects, earthworms, berries, and fruits.',
        image: './images/blackbird.jpg',
        list: [
          ['Scientific Name','Average Size','Feeding','Weight'],
          ['Turdus merula',' 23.5 cm (9.25 in)','Omnivorous, insects, seeds',' 80 to 125 g (2.8 to 4.4 oz)']
        ]}

];
