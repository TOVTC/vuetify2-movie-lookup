"use strict";(self["webpackChunkvuetify2_movie_lookup"]=self["webpackChunkvuetify2_movie_lookup"]||[]).push([[103],{1954:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var o=r(266),s=r(2118),i=r(1713),a=function(){var e=this,t=e._self._c;return t(s.Z,[t(i.Z,{staticClass:"ma-5",attrs:{justify:"center"}},[t(o.Z,[t("h1",[e._v("Now Playing:")])])],1),t(i.Z,{staticClass:"ma-5"},[t(o.Z,[t("MovieList",{attrs:{movies:e.movies}})],1)],1)],1)},n=[],u=r(6585),c=r(5514),l={props:["searchTerm"],components:{MovieList:u.Z},data(){return{movies:[]}},async created(){try{let e=await c.Z.getNowPlaying();if(!e)return void alert("An error occurred");this.movies=e}catch(e){alert("An error occurred"),console.log(e)}}},v=l,f=r(1001),m=(0,f.Z)(v,a,n,!1,null,null,null),p=m.exports}}]);
//# sourceMappingURL=103.4178d6fd.js.map