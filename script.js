const convert = document.querySelector(".convert");
convert.addEventListener("click", () => 
    {
        let TextOutput = document.querySelector(".TextOutput");
        let binary = document.querySelector(".BinaryInput").value;

        TextOutput.value = binary.split(' ') //Split string in array of binary chars
        .map(bin => String.fromCharCode(parseInt(bin, 2))) //Map every binary char to real char
        .join(''); //Join the array back to a string
    });