
const target=document.createElement("div");
    target.setAttribute("class","ind")
    // target.setAttribute("id","inde");
    // target.innerHTML=""
    document.body.append(target);
t1=()=>{
   setTimeout(()=>{
     console.log("10")
     target.innerHTML="TEN"
     t2=()=>{
      setTimeout(()=>{
        console.log("9")
        target.innerHTML="9"
        t3=()=>{
          setTimeout(()=>{
            console.log("8")
            target.innerHTML="8"
            t4=()=>{
              setTimeout(()=>{
                console.log("7")
                target.innerHTML="SEVEN"
                t5=()=>{
                  setTimeout(()=>{
                    console.log("6")
                    target.innerHTML="6"
                    t6=()=>{
                      setTimeout(()=>{
                        console.log("5")
                        target.innerHTML="5"
                        t7=()=>{
                          setTimeout(()=>{
                            console.log("4")
                            target.innerHTML="FOUR"
                            t8=()=>{
                              setTimeout(()=>{
                                console.log("3")
                                target.innerHTML="3"
                                t9=()=>{
                                  setTimeout(()=>{
                                    console.log("2")
                                    target.innerHTML="2"
                                    t10=()=>{
                                      setTimeout(()=>{
                                        console.log("1")
                                        target.innerHTML="ONE"
                                        t11=()=>{
                                          setTimeout(()=>{
                                            console.log("HAPPY INDEPENDENCE DAY")
                                            target.innerHTML="HAPPY INDEPENDENCE DAY"
                                          },1000)
                                         }
                                         t11()
                                      },1000)
                                     }
                                     t10()
                                  },1000)
                                 }
                                 t9()
                              },1000)
                             }
                             t8()
                          },1000)
                         }
                         t7()
                      },1000)
                     }
                     t6()
                  },1000)
                 }
                 t5()
              },1000)
             }
             t4()
          },1000)
         }
         t3()
      },1000)
     }
     t2()
  },1000)
}
t1()