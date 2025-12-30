function solution(phone_book){
    return !phone_book.sort()
    .some((v,i) => phone_book[i+1]?.startsWith(v))
}