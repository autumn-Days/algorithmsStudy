function bubbleSort(array)
{
    let counter = 0;
    for (let i = 0; i < array.length; i++)
    {
        for (let j = 0; j < array.length -1; j++)
        {
            //console.log(array);
            if (array[j] > array[j+1])
            {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            counter+=1;
        }
    }
    //console.log(`Loop executions: ${counter}`);
    return array
}

function shortBubbleSort(array)
{
    let counter = 0;
    for (let i = 0; i < array.length; i++)
    {
        let wasThereInversion = false;
        for (let j = 0; j < array.length -1; j++)
        {
            //console.log(array);
            if (array[j] > array[j+1])
            {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                wasThereInversion = true;
            }
            counter+=1;
        }
        if (!wasThereInversion)
            break;
    }
    //console.log(`Loop executions: ${counter}`);
    return array
}

function main()
{
    let array = [54,26,93,17,17,77,31,44,55,20];
    bubbleSort(array);
    shortBubbleSort(array);
}

main()