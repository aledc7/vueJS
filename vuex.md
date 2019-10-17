# VueX
![vueJS](https://raw.githubusercontent.com/aledc7/vuejs/master/vuelogo.png)
[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)


Vuex es una librería oficial de Vue que permite manejar el estado de la app que estemos creando, de manera centralizada, esto significa que es posible aplicar un patron del tipo __FLEX__ o __REDUX__ .  
Vuex hace posible que toda la informacíon de la App pueda concentrarse en un mismo lugar, y que este lugar actúe como origen único de nuestra data, para que pueda ser accedida y utilizada desde cualquier componente.  
Utilizar Vuex es recomendada para aplicaciones de mediana o gran escala que tengan mucha comunicación entre componentes, por lo tanto,  si la app es muy pequeña se puede usar cualquiera de los otros métodos para pasar información, como son __propiedades__, __eventos__, y __slots__.   
En resumen, Vuex sirve para que todos los componentes (sin importar su gerarquía), puedan compartir información de una manera centralizada. 
Al tener un Store de información único (similar al patron Singleton), lo que se logra es que se puedan propagar los cámbios en todos los componentes que están haciendo uso de la Data de ese Store.  
De esta manera, cada vez que la Data en este sSore cámbie, se renderizará en todos los componentes que usen esta misma Data.


