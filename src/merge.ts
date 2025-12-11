export function merge (collection_1 : number[] , collection_2 : number[], collection_3 : number[]) : number[] {

    const new_collect3 : number[] = []
    for (let i = collection_3.length - 1; i >= 0; i--) {
        new_collect3.push(collection_3[i]!); 
    }

    // console.log("arraydd[ldpfvdlvd", collection_1, collection_2, new_collect3)

    let i = 0
    let j = 0
    let k = 0
    const result : number[] = []

    while (i < collection_1.length || j < collection_2.length || k < new_collect3.length) {

        const arr_box : number [] = []
        if ( i < collection_1.length){
            arr_box.push(collection_1[i]!)
        }
        if (j < collection_2.length){
            arr_box.push(collection_2[j]!)
        }
        if (k < new_collect3.length){
            arr_box.push(new_collect3[k]!)
        }

        let find_min : number = arr_box[0]!
        for (let l = 1; l < arr_box.length; l++) {
            if (arr_box[l]! < find_min){
                find_min = arr_box[l]!
            } 
        }

        if (i < collection_1.length && find_min == collection_1[i]) {
            result.push(find_min);
            i++;
        }else if (j < collection_2.length && find_min == collection_2[j]) {
            result.push(find_min);
            j++;
        }else if (k < new_collect3.length && find_min == new_collect3[k]) {
            result.push(find_min);
            k++;
        }
    }

    return result
}

// console.log(merge([1, 2, 3, 4], [5, 7, 8, 9], [9, 6, 5, 1]));

// console.log(
//   merge([1,2,3,4], [5,7,8,9], [9,6,5,1])
// );