//1
 let  array1 = [1,2,2,3,3,'a'];
 let array2  = [1,5,6,5,6,2,3,'b'];
 let array3 = [];

 // xoa phan tu trung nhau cua mang 1
 for(let j = 0; j<array1.length-1; j++) {
       for(let i = j+1 ;i<array1.length; i++) {
              if(array1[i]===array1[j])
             {
                    array1.splice(i,1)
             }
       }
}
console.log(array1)

// xoa phan tu trung nhau cua mang 2
for(let j = 0; j<array2.length-1; j++) {
       for(let i = j+1 ; i<array2.length ;i++) {
              if(array2[i]===array2[j])
             {
                    array2.splice(i,1)
             }
       }
}
console.log(array2)
array3 = array2.concat(array1)
console.log(array3)
// noi 2 mang da loc va loc ptu trung tiep
for(let j = 0; j<array3.length-1; j++) {
       for(let i = j+1 ; i<array3.length ;i++) {
              if(array3[i]===array3[j])
             {
                    array3.splice(i,1)
             }
       }
}

console.log(array3)




///2
function sx () {
       const teamA = [
              {
                     name: 'Arsenal',
                     points: 99,
                     GD: 1,
              },
              {
                     name: 'Chelsea',
                     points: 75,
                     GD: 39,
              },
              {
                     name: 'Man United',
                     points: 75,
                     GD: 29,
              },
              {
                     name: 'Liverpool',
                     points: 88,
                     GD: 1,
              }
       ]
       teamA.map((team, index)=>{
              team.position = index;
              })
      teamA.sort((a,b)=> {
             if(a.points-b.points === 0){
                    return a.GD - b.GD;
             }
             else {
                     return b.points-a.points;
             }
      })
      console.log(teamA)
}
sx()