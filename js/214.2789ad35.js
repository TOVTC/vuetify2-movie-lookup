"use strict";(self["webpackChunkvuetify2_movie_lookup"]=self["webpackChunkvuetify2_movie_lookup"]||[]).push([[214],{3262:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var s=r(266),o=r(2118),u=r(1713),a=function(){var e=this,t=e._self._c;return t(o.Z,[t(u.Z,{staticClass:"ma-5",attrs:{justify:"center"}},[t(s.Z,[t("h1",[e._v('Search Results "'+e._s(this.$route.query.searchTerm)+'":')])])],1),t(u.Z,{staticClass:"ma-5"},[t(s.Z,[t("MovieList",{attrs:{movies:e.movies}})],1)],1)],1)},i=[],c=r(6585),n=r(5514),l={props:["searchTerm"],components:{MovieList:c.Z},data(){return{movies:[]}},async created(){try{let e=await n.Z.getResults(this.$route.query.searchTerm);if(!e)return void alert("An error occurred");this.movies=e}catch(e){alert("An error occurred"),console.log(e)}}},v=l,h=r(1001),m=(0,h.Z)(v,a,i,!1,null,null,null),f=m.exports}}]);
//# sourceMappingURL=214.2789ad35.js.map