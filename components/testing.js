
// import  variables  from 'constants.js'


const Test =()=>{
    const p_arr = [29, 22, 18, 10, 8] // max # copies of each 1 cost, 2 cos, etc...

    const l_arr = [  // first dimension is cost, second dimension is level
        [5, 5, 3.75, 2.75, 2, 1.25, 0.95, 0.7, 0.5],
        [0, 0, 1.25, 1.5, 1.75, 1.75, 1.5, 1, 0.75],
        [0, 0, 0, 0.75, 1, 1.5, 1.75, 1.75, 1.5],
        [0, 0, 0, 0, 2.5, 0.5, 0.75, 1.25, 1.5],
        [0, 0, 0, 0, 0, 0, 0.05, 0.3, 0.75]
    ]
    const variables = {
        pool_arr :p_arr,
        level_arr : l_arr,
    }
    console.log(variables.level_arr)
    return(
        <>Test</>
    )
}

export default Test;