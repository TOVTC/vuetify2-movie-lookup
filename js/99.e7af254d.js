"use strict";(self["webpackChunkvuetify2_movie_lookup"]=self["webpackChunkvuetify2_movie_lookup"]||[]).push([[99],{873:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var o=r(266),s=r(2118),a=r(1713),i=function(){var e=this,t=e._self._c;return t(s.Z,[t(a.Z,{staticClass:"ma-5",attrs:{justify:"center"}},[t(o.Z,[t("h1",[e._v("Top Rated:")])])],1),t(a.Z,{staticClass:"ma-5"},[t(o.Z,[t("MovieList",{attrs:{movies:e.movies}})],1)],1)],1)},n=[],u=r(6585),c=r(5514),l={props:["searchTerm"],components:{MovieList:u.Z},data(){return{movies:[]}},async created(){try{let e=await c.Z.getTopRated();if(!e)return void alert("An error occurred");this.movies=e}catch(e){alert("An error occurred"),console.log(e)}}},v=l,f=r(1001),p=(0,f.Z)(v,i,n,!1,null,null,null),m=p.exports}}]);
//# sourceMappingURL=99.e7af254d.js.map