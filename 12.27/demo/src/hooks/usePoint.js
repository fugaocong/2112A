import { reactive,onMounted,onBeforeUnmount } from "vue";

export default function usePoint(){
    let point = reactive({
        x:0,
        y:0
    })
    const savePoint=(event)=>{
        point.x = event.pageX
        point.y = event.pageY
    }
    onMounted(()=>{
        window.addEventListener("click",savePoint)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener("click",savePoint)
    })
    return point
}