// Proxy校验器
const obj={
  name:'zhangsan',
  age:'25',
}
const validator={
  name(value){
    return typeof value==='string'
  },
  age(value){
    return typeof value==='number' && value>25
  },
}

const createValidator=(obj,validator)=>{
  return new Proxy(obj,{
    _validator:validator,
    set(obj,prop,value,proxy){
      let validator=this._validator[prop](value)
      if (validator) {
        return Reflect.set(obj,prop,value,proxy)
      }else{
        throw Error(`cannot set ${prop} to ${value},type error` )
      }
    },

  })
}

const proxy=createValidator(obj,validator)
// proxy.name="lisi"
console.log(proxy.name='lisi')
// console.log(proxy.name=54555);
// console.log(proxy.age=24);
console.log(proxy.age=28)
console.log(obj)
