
async function getQuotes(){
    let data = await fetch('https://dummyjson.com/quotes').then(res => res.json());

    let arr = data.quotes;
    let quote = document.getElementById("quote")
    let author = document.getElementById("author")
    let button = document.getElementById("btn")

    quote.innerText = arr[0].quote
    author.innerText = "~ " + arr[0].author

    let idx = 1;

    let changeQuote = ()=>{
        quote.innerText = arr[idx].quote
        author.innerText = "~ " + arr[idx].author
        idx++;
        if(idx === 30)
        {
            idx = 0;
        }
    }

    button.addEventListener("click",changeQuote)
}

getQuotes()

