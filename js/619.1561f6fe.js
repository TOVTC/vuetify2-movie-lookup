"use strict";(self["webpackChunkvuetify2_movie_lookup"]=self["webpackChunkvuetify2_movie_lookup"]||[]).push([[619],{5210:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var i=s(266),a=s(2118),l=s(5495),r=s(1713),n=s(7423),m=function(){var t=this,e=t._self._c;return e(a.Z,[e(r.Z,{staticClass:"ma-5",attrs:{justify:"center"}},[e(i.Z,[e("h1",[t._v(t._s(t.film.original_title))])])],1),e(r.Z,{staticClass:"ma-5",attrs:{justify:"center",align:"end"}},[e(i.Z,{attrs:{cols:"12",md:"6"}},[e(l.Z,{staticClass:"ma-5",attrs:{src:t.generatePosterPath(t.film.poster_path),"aspect-ratio":10/15}})],1),e(i.Z,{attrs:{cols:"12",md:"6"}},[t.film?e(n.Z,{staticClass:"ma-5"},[""!==t.film.tagline?e("p",{staticClass:"my-3 font-italic text-subtitle-1"},[t._v('"'+t._s(t.film.tagline)+'"')]):t._e(),""!==t.film.release_date?e("p",{staticClass:"text-subtitle-2"},[t._v("Release Date - "+t._s(t.film.release_date))]):t._e(),t.getRuntime(t.film.runtime)?e("p",{staticClass:"text-subtitle-2"},[t._v("Runtime - "+t._s(t.getRuntime(t.film.runtime)))]):t._e(),t.parseObjects("name",t.film.genres)?e("p",{staticClass:"text-subtitle-2"},[t._v("Genres - "+t._s(t.parseObjects("name",t.film.genres).join(", ")))]):t._e(),t.parseObjects("english_name",t.film.spoken_languages)?e("p",{staticClass:"text-subtitle-2"},[t._v("Languages ("+t._s(t.film.original_language)+")"+t._s(` - ${t.parseObjects("english_name",t.film.spoken_languages).join(", ")}`))]):t._e(),t.parseObjects("name",t.film.production_companies)?e("p",{staticClass:"text-subtitle-2"},[t._v("Production Company - "+t._s(t.parseObjects("name",t.film.production_companies).join(", ")))]):t._e(),""!==t.film.homepage?e("a",{staticClass:"text-subtitle-2",attrs:{href:t.film.homepage,target:"_blank"}},[t._v(t._s(t.film.homepage))]):t._e(),""!==t.film.overview?e("p",{staticClass:"mt-5 text-body-1"},[t._v(t._s(t.film.overview))]):t._e()]):t._e()],1)],1),e(r.Z,{staticClass:"ma-5",attrs:{justify:"center"}},[e(i.Z,{attrs:{cols:"12",md:"6"}},[e("h2",[t._v("Recommended Films")]),e("MovieList",{attrs:{movies:t.recommended}})],1),e(i.Z,{attrs:{cols:"12",md:"6"}},[e("h2",[t._v("Similar Films")]),e("MovieList",{attrs:{movies:t.similar}})],1)],1)],1)},o=[],c=(s(7658),s(5514)),u=s(6585),_={props:["id"],components:{MovieList:u.Z},data(){return{film:{},recommended:[],similar:[]}},methods:{generatePosterPath(t){return t&&"null"!==t&&0!==t.trim().length?`https://image.tmdb.org/t/p/original${t}`:"/favicon.png"},parseObjects(t,e){let s=[];return e.forEach((e=>{s.push(e[t])})),s},getRuntime(t){let e=Math.floor(t/60),s=t%60;return 0!==e&&0!==s&&`${e}h ${s}min`}},async created(){try{let t=await c.Z.getDetails(this.id),e=await c.Z.getRecommended(this.id),s=await c.Z.getSimilar(this.id);if(!t||!e||!s)return void alert("An error occurred");this.film=t,this.recommended=e,this.similar=s}catch(t){alert("An error occurred"),console.log(t)}}},f=_,p=s(1001),g=(0,p.Z)(f,m,o,!1,null,null,null),d=g.exports}}]);
//# sourceMappingURL=619.1561f6fe.js.map