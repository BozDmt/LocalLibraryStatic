const pictures = Array.from(document.querySelectorAll('.img-home'))
const viewAllBtn = document.querySelector('.viewall')

const picNames =[
    'interiormaster_resized/4.Desi_living_room.png',
    // 'interiormaster_resized/5.Desi_living_room.png',
    'interiormaster_resized/7.Desi_bedroom.png',
    // 'interiormaster_resized/8.Desi_bedroom.png',
    // 'interiormaster_resized/11.Kids_room.png',
    // 'interiormaster_resized/12.Kids_room.png',
    // 'interiormaster_resized/3.Hol.png'
]

for(i in pictures){
    pictures[i].setAttribute('style',`background-image: url(${picNames[i]});`)
}