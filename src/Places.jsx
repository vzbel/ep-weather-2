
// Just a huge list with data about places in El Paso
const placesData = [
    {
      name: "L & J Cafe",
      category: "Restaurant",
      address: "3622 E Missouri Ave, El Paso, TX 79903",
      imgURL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9f/3a/a8/main-dining-room.jpg?w=800&h=500&s=1",
      description: "Historic Tex-Mex restaurant known for its authentic flavors and local vibe since 1927.",
      website: "https://ljcafe.com/",
      tempRange: [50, 90]
    },
    {
      name: "Franklin Mountains State Park",
      category: "Park",
      address: "1331 McKelligon Canyon Rd, El Paso, TX 79930",
      imgURL: "https://tpwd.texas.gov/state-parks/franklin-mountains/gallery/mondys-gap_0191.jpg",
      description: "One of the largest urban parks in the U.S., offering hiking, biking, and stunning desert views.",
      website: "https://tpwd.texas.gov/state-parks/franklin-mountains",
      tempRange: [55, 75]
    },
    {
      name: "Cattleman's Steakhouse",
      category: "Restaurant",
      address: "3450 S Fabens Carlsbad Rd, Fabens, TX 79838",
      imgURL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/b4/64/cb/el-paso.jpg?w=900&h=500&s=1",
      description: "Famous Western-style steakhouse on a working ranch with hearty portions and rustic charm.",
      website: "https://cattlemanssteakhouse.com/",
      tempRange: [50, 90]
    },
    {
      name: "El Paso Museum of Art",
      category: "Museum",
      address: "1 Arts Festival Plaza, El Paso, TX 79901",
      imgURL: "https://visit-el-paso-2-production.s3.amazonaws.com/places/images/000/000/001/optimized/IMG_3220.jpg?1505863136",
      description: "Regional museum featuring a wide range of American, Mexican, and European artworks.",
      website: "https://epma.art/",
      tempRange: [0, 120] // indoor, any temperature
    },
    {
      name: "Hueco Tanks State Park",
      category: "Park",
      address: "6900 Hueco Tanks Rd No. 1, El Paso, TX 79938",
      imgURL: "https://www.nps.gov/common/uploads/cropped_image/primary/95560F3A-0027-A63F-07F72CB75A9F42BC.jpg?width=1600&quality=90&mode=crop",
      description: "Renowned bouldering and rock-climbing site with historic rock art and guided tours.",
      website: "https://tpwd.texas.gov/state-parks/hueco-tanks",
      tempRange: [50, 75]
    },
    {
      name: "Scenic Drive Overlook",
      category: "Attraction",
      address: "Scenic Dr, El Paso, TX 79902",
      imgURL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/00/6b/9a/scenic-drive-overlook.jpg?w=1200&h=-1&s=1",
      description: "Popular overlook offering panoramic views of El Paso, Ciudad Juárez, and the surrounding desert.",
      website: "https://visitelpaso.com/places/scenic-drive",
      tempRange: [50, 80]
    },
    {
      name: "The Tap",
      category: "Restaurant",
      address: "408 E San Antonio Ave, El Paso, TX 79901",
      imgURL: "https://www.elpasotimes.com/gcdn/-mm-/aad15f00625a0f077e71533ad8717042cc5b2636/c=0-208-2398-1563/local/-/media/2018/07/30/TXNMGroup/ElPaso/636685643095168784-8-The-Tap.jpg",
      description: "Casual downtown spot known for its nachos, cold beers, and live jukebox atmosphere.",
      website: "https://thetapep.com/",
      tempRange: [0, 120] // indoor
    },
    {
      name: "Chamizal National Memorial",
      category: "Park",
      address: "800 S San Marcial St, El Paso, TX 79905",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Chamizal_visitor_center.JPG",
      description: "Historic site celebrating the peaceful resolution of a border dispute between the U.S. and Mexico.",
      website: "https://www.nps.gov/cham/index.htm",
      tempRange: [55, 80]
    }
  ];
  
  export default placesData;
  