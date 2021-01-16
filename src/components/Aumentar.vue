 <template>
  <dir>
      <h2>Nuevas Caracteristicas</h2>
      <p>{{numero}}</p>
        <v-btn @click="aumentar">Aumentar</v-btn>
        <ul>
            <li v-for="(item,index) in posts" :key="index"></li>
            {{item.title}}
        </ul>
  </dir>
</template>

<script>
import { useAumentar } from "@/use/useAumentar.js";

export default {
    setup(){
        
        return {...useAumentar()}
}
}

</script>