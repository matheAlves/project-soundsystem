(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{23:function(t,e,n){},33:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(24),s=n.n(c),i=(n(33),n(3)),o=n(4),u=n(6),l=n(5),d=n(13),j=n(7),b=n(2),h=n.n(b),p=n(8),f=n(19),O="user",m=function(t){return localStorage.setItem(O,JSON.stringify(t))},v=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},x=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(O));null===e&&(e={}),v(e)(t)}))},k=function(t){return new Promise((function(e){m(Object(f.a)(Object(f.a)({},{name:"",email:"",image:"",description:""}),t)),v("OK")(e)}))},g=n(0),y=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("span",{children:"Carregando..."})}}]),n}(a.Component),w=y,C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).handleChange=function(e){var n=e.target.value;n.length>=3?t.setState({buttonDisabled:!1,name:n}):t.setState({buttonDisabled:!0,name:n})},t.handleLogin=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.name,t.setState({loading:!0}),e.next=4,k({name:n});case 4:t.setState({redirect:!0,loading:!1});case 5:case"end":return e.stop()}}),e)}))),t.state={buttonDisabled:!0,name:"",loading:!1,redirect:!1},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.buttonDisabled,n=t.loading,a=t.redirect;return n?Object(g.jsx)(w,{}):Object(g.jsxs)("div",{"data-testid":"page-login",children:[Object(g.jsxs)("form",{children:[Object(g.jsxs)("label",{htmlFor:"login-name-input",children:["Nome",Object(g.jsx)("input",{"data-testid":"login-name-input",id:"login-name-input",type:"text",onChange:this.handleChange})]}),Object(g.jsx)("button",{disabled:e,"data-testid":"login-submit-button",type:"button",onClick:this.handleLogin,children:"Entrar"})]}),a?Object(g.jsx)(j.a,{to:"/project-soundsystem/search"}):""]})}}]),n}(a.Component),S=(n(23),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).fetchUsername=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,x();case 3:n=e.sent,t.setState({loading:!1,user:n});case 5:case"end":return e.stop()}}),e)}))),t.state={user:"",loading:!0},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchUsername()}},{key:"render",value:function(){var t=this.state,e=t.user,n=t.loading;return Object(g.jsxs)("header",{"data-testid":"header-component",className:"space-evenly",children:[Object(g.jsx)(d.b,{to:"/project-soundsystem/search","data-testid":"link-to-search",children:"Search"}),Object(g.jsx)(d.b,{to:"/project-soundsystem/favorites","data-testid":"link-to-favorites",children:"Favorites"}),Object(g.jsx)(d.b,{to:"/project-soundsystem/profile","data-testid":"link-to-profile",children:"Profile"}),n?Object(g.jsx)(w,{}):Object(g.jsx)("span",{"data-testid":"header-user-name",children:e.name})]})}}]),n}(a.Component)),I=function(){var t=Object(p.a)(h.a.mark((function t(e){var n,a,r,c,s,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),t.next=4,fetch(a);case 4:return r=t.sent,t.next=7,r.json();case 7:return c=t.sent,s=c.results,i=s.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=I,T=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).handleChange=function(e){var n=e.target;t.setState({search:n.value},(function(){t.state.search.length>=2?t.setState({isButtonDisabled:!1}):t.setState({isButtonDisabled:!0})}))},t.handleSubmit=Object(p.a)(h.a.mark((function e(){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.state.search,a=t.props.saveAlbums,t.setState({loading:!0},Object(p.a)(h.a.mark((function e(){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(n);case 2:r=e.sent,a(r,n),t.setState({loading:!1});case 5:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)}))),t.state={isButtonDisabled:!0,search:"",loading:!1},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.loading,n=t.isButtonDisabled;return e?Object(g.jsx)(w,{}):Object(g.jsx)("div",{className:"space-evenly",children:Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{type:"search",id:"search",name:"search",placeholder:"Nome do artista","data-testid":"search-artist-input",onChange:this.handleChange}),Object(g.jsx)("button",{type:"button","data-testid":"search-artist-button",disabled:n,onClick:this.handleSubmit,children:"Pesquisar"})]})})}}]),n}(a.Component),D=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.search,n=t.albums;return n.length?Object(g.jsxs)("section",{children:[Object(g.jsx)("h1",{children:"Resultado de \xe1lbuns de: ".concat(e)}),Object(g.jsx)("div",{className:"space-evenly",children:n.map((function(t){return Object(g.jsxs)(d.b,{to:"/project-soundsystem/album/".concat(t.collectionId),className:"album-card","data-testid":"link-to-album-".concat(t.collectionId),children:[Object(g.jsx)("p",{className:"font-small",children:t.collectionName}),Object(g.jsx)("img",{src:t.artworkUrl100,alt:"album"})]},t.collectionId)}))})]}):Object(g.jsx)("p",{children:"Nenhum \xe1lbum foi encontrado"})}}]),n}(a.Component),P=D,F=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).saveAlbums=function(e,n){t.setState({albums:e,search:n})},t.state={albums:[],search:""},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.search,n=t.albums;return Object(g.jsxs)("div",{"data-testid":"page-search",children:[Object(g.jsx)(S,{}),Object(g.jsx)(T,{saveAlbums:this.saveAlbums}),Object(g.jsx)(P,{search:e,albums:n})]})}}]),n}(a.Component),J=n(27),U=function(){var t=Object(p.a)(h.a.mark((function t(e){var n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=U,A=n(28),B="favorite_songs";JSON.parse(localStorage.getItem(B))||localStorage.setItem(B,JSON.stringify([]));var M=function(){return JSON.parse(localStorage.getItem(B))},E=function(t){return localStorage.setItem(B,JSON.stringify(t))},K=function(t){return function(e){setTimeout((function(){e(t)}),500)}},R=function(){return new Promise((function(t){var e=M();K(e)(t)}))},q=function(t){return new Promise((function(e){if(t){var n=M();E([].concat(Object(A.a)(n),[t]))}K("OK")(e)}))},_=function(t){return new Promise((function(e){var n=M();E(n.filter((function(e){return e.trackId!==t.trackId}))),K("OK")(e)}))},z=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).handleClick=function(){var e=Object(p.a)(h.a.mark((function e(n){var a,r,c,s,i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.target,r=t.props.albumTracks,c=a.id,t.setState({loading:!0}),e.next=6,R();case 6:if(s=e.sent,!s.some((function(t){return t.trackId===parseInt(c,10)}))){e.next=16;break}return i=r.find((function(t){return t.trackId===parseInt(c,10)})),e.next=12,_(i);case 12:return e.next=14,t.favoriteCheck();case 14:e.next=21;break;case 16:return o=r.find((function(t){return t.trackId===parseInt(c,10)})),e.next=19,q(o);case 19:return e.next=21,t.favoriteCheck();case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.favoriteCheck=Object(p.a)(h.a.mark((function e(){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.track,e.next=3,R();case 3:a=e.sent,r=a.some((function(t){return t.trackId===n.trackId})),t.setState({checked:r,loading:!1});case 6:case"end":return e.stop()}}),e)}))),t.state={checked:!1,loading:!0},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.favoriteCheck()}},{key:"render",value:function(){var t=this.props.track,e=this.state,n=e.checked;return e.loading?Object(g.jsx)(w,{}):Object(g.jsxs)("label",{htmlFor:t.trackId,children:["Favorita",Object(g.jsx)("input",{defaultChecked:n,type:"checkbox",id:t.trackId,"data-testid":"checkbox-music-".concat(t.trackId),onClick:this.handleClick})]})}}]),n}(a.Component),G=z,H=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.props.albumTracks;return Object(g.jsx)("div",{className:"track-listing",children:e.map((function(n){return Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:"".concat(n.trackName)}),Object(g.jsxs)("audio",{"data-testid":"audio-component",src:n.previewUrl,controls:!0,children:[Object(g.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(g.jsx)("code",{children:"audio"}),"."]}),Object(g.jsx)(G,{favTrackListLoad:t.loaded,albumTracks:e,track:n,updateLoading:t.updateLoading})]},n.trackId)}))})}}]),n}(a.Component),Q=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).fetch=Object(p.a)(h.a.mark((function e(){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),n=t.props.match.params.id,e.next=4,L(n);case 4:a=e.sent,t.setState({album:a},(function(){t.setState({loading:!1})}));case 6:case"end":return e.stop()}}),e)}))),t.state={album:[],loading:!1},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var t=this.state,e=t.album,n=t.loading;if(e.length>0){var a=Object(J.a)(e),r=a[0],c=a.slice(1);return Object(g.jsxs)("div",{"data-testid":"page-album",children:[Object(g.jsx)(S,{}),Object(g.jsxs)("section",{className:"track-listing",children:[Object(g.jsx)("h1",{"data-testid":"artist-name",children:r.artistName}),Object(g.jsx)("h2",{"data-testid":"album-name",children:r.collectionName}),Object(g.jsx)("img",{src:r.artworkUrl100,alt:"album"}),n?Object(g.jsx)(w,{}):Object(g.jsx)(H,{albumTracks:c})]})]})}return Object(g.jsx)("div",{"data-testid":"page-album",children:Object(g.jsx)(S,{})})}}]),n}(a.Component),V=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).saveFavTracks=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:n=e.sent,t.setState({favTracks:n});case 4:case"end":return e.stop()}}),e)}))),t.state={favTracks:[],loading:!1},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.saveFavTracks()}},{key:"render",value:function(){var t=this.state,e=t.favTracks;return t.loading?Object(g.jsx)(w,{}):Object(g.jsx)(H,{albumTracks:e,favListReload:this.loaded})}}]),n}(a.Component),W=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).renderFavTracks=Object(p.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R();case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}}),t)}))),t.state={loading:!1},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.loading;return Object(g.jsxs)("div",{"data-testid":"page-favorites",children:[Object(g.jsx)(S,{}),t?Object(g.jsx)(w,{}):Object(g.jsx)(V,{})]})}}]),n}(a.Component),X=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{"data-testid":"page-profile",children:[Object(g.jsx)(S,{}),"Profile"]})}}]),n}(a.Component),Y=X,Z=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(g.jsx)(S,{}),"Profile Edit"]})}}]),n}(a.Component),$=Z,tt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{"data-testid":"page-not-found",children:"Not Found"})}}]),n}(a.Component),et=tt,nt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)(d.a,{children:Object(g.jsxs)(j.d,{children:[Object(g.jsx)(j.b,{exact:!0,path:"/project-soundsystem",component:C}),Object(g.jsx)(j.b,{path:"/project-soundsystem/search",component:F}),Object(g.jsx)(j.b,{path:"/project-soundsystem/album/:id",component:Q}),Object(g.jsx)(j.b,{path:"/project-soundsystem/favorites",component:W}),Object(g.jsx)(j.b,{path:"/project-soundsystem/profile/edit",component:$}),Object(g.jsx)(j.b,{path:"/project-soundsystem/profile",component:Y}),Object(g.jsx)(j.b,{path:"*",component:et})]})})}}]),n}(r.a.Component),at=nt;s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(at,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.30eb6ee1.chunk.js.map