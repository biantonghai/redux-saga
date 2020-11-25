import {INCREMENT,INCREMENTASYNC} from '../constants/counter'
export const increment = ()=>{
  return {
    type:INCREMENT
  }
}
export const incrementAsync = ()=>{
  return {
    type:INCREMENTASYNC
  }
}