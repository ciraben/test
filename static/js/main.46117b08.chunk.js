(this.webpackJsonpWebHack=this.webpackJsonpWebHack||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(2),r=a(3),i=a(4),l=a(0),o=a.n(l),c=a(7),h=a.n(c),m=a(5);function u(e){for(var t=1/e.length,a=Math.random(),s=0;s<e.length;s++)if(a<(s+1)*t)return e[s];return e[e.length-1]}function p(e){var t=1;return(e=Math.floor(e))<0&&(e=-e,t=-1),e<1?0:e<2?t:(Math.floor(Math.random()*e)+1)*t}function f(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function d(e){var t=e[0],a=e[1],s=e[2];return"#"+(t=1===(t=parseInt(t).toString(16)).length?"0"+t:t)+(a=1===(a=parseInt(a).toString(16)).length?"0"+a:a)+(s=1===(s=parseInt(s).toString(16)).length?"0"+s:s)}function v(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,a,s){return"#"+t+t+a+a+s+s})).substring(1).match(/.{2}/g).map((function(e){return parseInt(e,16)})),a=(t[0]+t[1]+t[2])/3;return d([a,a,a])}a(6);var g=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={ticker:0,x:n.props.x,y:n.props.y,size:80,isDead:!1,dir:2*Math.PI*Math.random(),name:n.props.name,color:n.props.color,splashFor:n.props.splashFor,quaffFor:n.props.quaffFor,isAmulet:n.props.isAmulet,isCandelabrum:n.props.isCandelabrum,isBell:n.props.isBell,isBook:n.props.isBook,smallifier:n.props.smallifier,healer:n.props.healer,isGrayscale:n.props.isGrayscale,grayscaler:n.props.grayscaler,colorer:n.props.colorer,hpReveal:n.props.hpReveal,progressReveal:n.props.progressReveal,hpHide:n.props.hpHide,hallucinogenic:n.props.hallucinogenic,sobering:n.props.sobering,isMimic:n.props.isMimic,isOmen:n.props.isOmen,cancelOmen:n.props.cancelOmen},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"kill",value:function(){clearInterval(this.timerID),this.setState({isDead:!0,x:-50,y:-50})}},{key:"tick",value:function(){var e=this.state.x,t=this.state.y;this.setState({ticker:this.state.ticker+1,x:e-.4*Math.cos(this.state.dir),y:t-.4*Math.sin(this.state.dir)}),(e<0||99<e||t<0||89<t)&&this.onImpact()}},{key:"onImpact",value:function(){this.props.onImpact(this),this.kill()}},{key:"onClick",value:function(){this.props.onQuaff(this),this.kill()}},{key:"render",value:function(){var e=this,t=this.state.x,a=this.state.y,s=this.props.size,n=this.props.isHallucinating?d([f(0,256),f(0,256),f(0,256)]):this.props.isGrayscale?v(this.state.color):this.state.color,r=this.props.isHallucinating?u(["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]):"\u229e",i={width:s.toString()+"px",height:s.toString()+"px",fontSize:(1.6*s).toString()+"px",color:n,transform:"translate("+t+"vw, "+a+"vh)"},l={position:"relative",top:(.85*-s).toString()+"px",left:(-s/8).toString()+"px"};return o.a.createElement("div",null,o.a.createElement("button",{style:i,className:this.state.isDead?"window--dead":"window",onClick:function(){return e.onClick()}},o.a.createElement("div",{style:l},r)))}}]),a}(o.a.Component);g.defaultProps={name:"window",color:"#ffffff",splashFor:0,quaffFor:0,isAmulet:!1,isCandelabrum:!1,isBell:!1,isBook:!1,smallifier:!1,size:80,healer:!1,isGrayscale:!1,grayscaler:!1,colorer:!1,hpReveal:!1,progressReveal:!1,hpHide:!1,hallucinogenic:!1,isHallucinating:!1,sobering:!1,isMimic:!1,isOmen:!1,cancelOmen:!1},h.a.render(o.a.createElement(g,null),document.getElementById("root"));var b=a(9),y=a(8),w=a.n(y),k=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("img",{src:w.a,alt:"Window Error",className:"omen",style:{left:this.props.x.toString()+"vw",top:this.props.y.toString()+"vh",zIndex:(this.props.layer+2e3).toString()}}),o.a.createElement("p",{style:{color:"black"}},"wizards rule"))}}]),a}(o.a.Component);function E(e){return[Math.max(255,Math.floor(256*e[0])),Math.max(255,Math.floor(256*e[1])),Math.max(255,Math.floor(256*e[2]))]}for(var O=[],H=0,M=[[0,0,0],[.721,.898,.196],[1,.788,.29],[.451,.847,1],[1,.639,.666],[.498,.945,.796],[1,1,1],[.525,.701,0],[.949,.592,.094],[.255,.65,.85],[.94,.443,.47],[.302,.749,.6],[.196,.196,.196],[1,.396,.396],[.98,.98,.98],[.36,.4,.45],[1,.415,0],[.36,.4,.45],[.94,.93,.89]];H<M.length;H++){var x=M[H];O.push(d(E(x)))}var B=["#aaffaa","#5555ff","#ffffff","#0aaaaa","#ffff66","#660000","#abcabc","#582984","#f0418a","#550011","#ffaa44","#923ff0","#000000","#45a8a1"],S=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).splashHandler=n.splashHandler.bind(Object(m.a)(n)),n.quaffHandler=n.quaffHandler.bind(Object(m.a)(n)),n.ticker=0,n.dev=!1,n.state={tx:45,ty:40,windows:[],playerMaxHP:20,playerHP:20,hasAmulet:!1,hasBook:!1,hasCandelabrum:!1,hasBell:!1,smallified:!1,colorblind:!1,colorshift:n.dev?0:f(0,B.length),seeHP:!!n.dev,seeProgress:!!n.dev,hallucinating:!1,omens:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"isGameOverYet",value:function(){this.state.playerHP<1||this.state.omens.length>15?this.props.wincon(!1):this.state.hasAmulet&&this.state.hasCandelabrum&&this.state.hasBook&&this.state.hasBell&&this.props.wincon(!0)}},{key:"splashHandler",value:function(e){if(this.setState({playerHP:this.state.playerHP-p(e.state.splashFor),seeHP:this.state.seeHP||e.state.hpReveal}),e.state.isOmen){var t=this.state.omens;t.push({x:Math.floor(90*Math.random()-10),y:Math.floor(70*Math.random())}),this.setState({omens:t})}this.isGameOverYet()}},{key:"quaffHandler",value:function(e){if(this.setState({playerHP:Math.min(this.state.playerMaxHP,this.state.playerHP+p(e.state.quaffFor)),hasAmulet:this.state.hasAmulet||e.state.isAmulet,hasBook:this.state.hasBook||e.state.isBook,hasCandelabrum:this.state.hasCandelabrum||e.state.isCandelabrum,hasBell:this.state.hasBell||e.state.isBell,smallified:this.state.smallified||e.state.smallifier,colorblind:this.state.colorblind||e.state.grayscaler,seeProgress:this.state.seeProgress||e.state.progressReveal,hallucinating:this.state.hallucinating||e.state.hallucinogenic}),e.state.healer&&this.setState({smallified:!1}),e.state.colorer&&this.setState({colorblind:!1}),e.state.hpHide&&this.setState({seeHP:!1}),e.state.sobering&&this.setState({hallucinating:!1}),e.state.isMimic&&(this.state.hasAmulet?this.setState({hasAmulet:!1}):this.state.hasCandelabrum?this.setState({hasCandelabrum:!1}):this.state.hasBook?this.setState({hasBook:!1}):this.state.hasBell?this.setState({hasBell:!1}):this.setState({playerHP:this.state.playerHP-p(8)})),e.state.cancelOmen){var t=this.state.omens;t.pop(),this.setState({omens:t})}this.isGameOverYet()}},{key:"tick",value:function(){if(this.ticker++,!(this.ticker%10)){var e=this.state.windows,t=Math.random();t<.05?this.state.hasCandelabrum?e.push({name:"Amulet of Nerdoy",color:"#ff33dd",isAmulet:!0}):this.state.hasBook?e.push({name:"Candelabrum",color:"#998800",isCandelabrum:!0,colorer:!0}):this.state.hasBell?e.push({name:"Necronomicon",color:"#222233",isBook:!0,grayscaler:!0,sobering:!0}):e.push({name:"Bell of Opening",color:"#ccccdd",isBell:!0,healer:!0}):t<.65?e.push(u([{name:"window of lesser healing",color:B[(0+this.state.colorshift)%B.length],splashFor:-3},{name:"window of wonderland",color:B[(1+this.state.colorshift)%B.length],smallifier:!0},{name:"window of bugfix",color:B[(2+this.state.colorshift)%B.length],healer:!0,sobering:!0},{name:"window of colorblindness",color:B[(3+this.state.colorshift)%B.length],grayscaler:!0},{name:"window of stained glass",color:B[(4+this.state.colorshift)%B.length],colorer:!0},{name:"window of annoyance",color:B[(12+this.state.colorshift)%B.length],splashFor:3},{name:"window of hurt",color:B[(5+this.state.colorshift)%B.length],splashFor:6}])):e.push(u([{name:"window of introspection",color:B[(6+this.state.colorshift)%B.length],hpReveal:!0},{name:"window of archaeology",color:B[(7+this.state.colorshift)%B.length],progressReveal:!0},{name:"window of deeper healing",color:B[(8+this.state.colorshift)%B.length],quaffFor:10,splashFor:5,colorer:!0},{name:"window of cover wounds",color:B[(9+this.state.colorshift)%B.length],hpHide:!0},{name:"window of pain",color:B[(10+this.state.colorshift)%B.length],quaffFor:-12,sobering:!0},{name:"window of hallucination",color:B[(11+this.state.colorshift)%B.length],hallucinogenic:!0},{name:"window mimic",color:"#ff33dd",isMimic:!0},{name:"window of warning",color:B[(13+this.state.colorshift)%B.length],isOmen:!0},{name:"window of cancellation",color:B[(14+this.state.colorshift)%B.length],cancelOmen:!0}])),this.setState({windows:e})}}},{key:"render",value:function(){var e,t=[],a=Object(b.a)(this.state.omens);try{for(a.s();!(e=a.n()).done;){var s=e.value;t.push(o.a.createElement(k,{x:s.x,y:s.y,layer:this.state.omens.indexOf(s)}))}}catch(c){a.e(c)}finally{a.f()}var n,r=[],i=Object(b.a)(this.state.windows);try{for(i.s();!(n=i.n()).done;){var l=n.value;r.push(o.a.createElement(g,{onImpact:this.splashHandler,onQuaff:this.quaffHandler,x:this.state.tx,y:this.state.ty,color:l.color,splashFor:l.splashFor,quaffFor:l.quaffFor,isAmulet:l.isAmulet,isCandelabrum:l.isCandelabrum,isBell:l.isBell,isBook:l.isBook,size:this.state.smallified?40:80,smallifier:l.smallifier,healer:l.healer,isGrayscale:this.state.colorblind,grayscaler:l.grayscaler,colorer:l.colorer,hpReveal:l.hpReveal,progressReveal:l.progressReveal,hpHide:l.hpHide,hallucinogenic:l.hallucinogenic,isHallucinating:this.state.hallucinating,sobering:l.sobering,isMimic:l.isMimic,isOmen:l.isOmen,cancelOmen:l.cancelOmen}))}}catch(c){i.e(c)}finally{i.f()}return o.a.createElement("div",{style:{position:"absolute"}},o.a.createElement("div",{id:"artifacts"},o.a.createElement("h1",{style:{visibility:this.state.seeProgress&&this.state.hasBell?"visible":"hidden",color:"#ccccdd"}},"\u2b24"),o.a.createElement("h1",{style:{visibility:this.state.seeProgress&&this.state.hasBook?"visible":"hidden",color:"#222233"}},"\u2b24"),o.a.createElement("h1",{style:{visibility:this.state.seeProgress&&this.state.hasCandelabrum?"visible":"hidden",color:"#998800"}},"\u2b24")),o.a.createElement("div",{id:"HP-bar",className:"progress",style:{visibility:this.state.seeHP?"visible":"hidden"}},o.a.createElement("div",{className:"progress-bar "+(this.state.colorblind?"bg-secondary":"bg-success"),style:{width:(this.state.hallucinating?100*Math.random():this.state.playerHP/this.state.playerMaxHP*100).toString()+"%"}})),t,r)}}]),a}(o.a.Component),j=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).wincon=n.wincon.bind(Object(m.a)(n)),n.state={menu:!0,gameover:!1,ascended:!1},n}return Object(n.a)(a,[{key:"newGame",value:function(){this.setState({menu:!1,gameover:!1,ascended:!1})}},{key:"wincon",value:function(e){this.setState({menu:!0,gameover:!0,ascended:e})}},{key:"render",value:function(){var e=this;if(this.state.menu){var t=this.state.gameover?this.state.ascended?o.a.createElement("h1",{className:"text-success"},"Congratulations, you smashed the Amulet~"):o.a.createElement("h1",{className:"text-danger"},"You Died..."):null;return o.a.createElement("div",{className:"splash pt-5 w-100"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h1",{className:"display-1"},"WebHack"),o.a.createElement("hr",{className:"bg-warning w-50"}),o.a.createElement("h4",null,"Smash the Amulet!"),o.a.createElement("p",null,"v0.4.1"),o.a.createElement("br",null),o.a.createElement("br",null),t,o.a.createElement("br",null),o.a.createElement("button",{className:"btn-lg",onClick:function(){return e.newGame()}},"New Game?"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"Built by Tom Van Manen in ReactJS for ",o.a.createElement("a",{href:"https://ldjam.com/",target:"_blank",rel:"noopener noreferrer"},"Ludum Dare 47"),"."),o.a.createElement("p",null,"Based on the lovely & reverend ",o.a.createElement("a",{href:"https://www.nethack.org",target:"_blank",rel:"noopener noreferrer"},"NetHack"),"."),o.a.createElement("p",null,"\xa92020 ",o.a.createElement("a",{href:"https://firstdonoharm.dev/",target:"_blank",rel:"noopener noreferrer"},"Hippocratic License 2.1"),"."))}return o.a.createElement("div",{className:"gamestate w-100"},o.a.createElement(S,{wincon:this.wincon}))}}]),a}(o.a.Component),C=(a(16),function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement("body",null,o.a.createElement("nav",{id:"navbar",class:"navbar sticky-top bg-dark"},o.a.createElement("div",{class:"nav-brand pl-2"},o.a.createElement("a",{href:"https://ciraben.github.io/webhack"},"WebHack 0.4.1")),o.a.createElement("ul",{class:"nav navbar-nav navbar-expand"},o.a.createElement("li",{class:"nav-item"},o.a.createElement("a",{class:"nav-link p-2",href:"https://github.com/ciraben"},"ciraben")))),o.a.createElement("div",{id:"welcome-section",class:"jumbotron jumbotron-fluid mb-0 py-0"},o.a.createElement("div",{class:"container-fluid d-flex h-100 px-0"},o.a.createElement(j,null))))}}]),a}(o.a.Component));h.a.render(o.a.createElement(C,null),document.getElementById("root"))},6:function(e,t,a){},8:function(e,t,a){e.exports=a.p+"static/media/window_wizard.ef728647.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.46117b08.chunk.js.map