export const getTag = (arr, tag) => {
   if (Array.isArray(arr)) {
	 return  arr.some(item => item === tag);
   } else if (typeof arr === "string") {
	   return arr === tag;
   } else {
	   return false;
   }

}