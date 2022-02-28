/*
javascript save to clipboard
*/

function saveToClipboard(txt){
  if (!(typeof window === 'undefined')) {
    navigator.clipboard.writeText(txt) 
    return txt? `${txt} cpied to clipboard` : txt `Error`
  }
  
  return "Error"
  
}

// driver code
console.log(saveToClipboard(5));
