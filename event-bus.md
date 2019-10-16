# VueJS 2 - Event Bus

[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)

Event Bus es una manera de enviar información entre componentes que no tienen relación, esto quere decir que no son ni padres ni hijos.
 Event Bus no es mas que otra instancia de Vue, la cual puede emitir eventos y pasar data a traves de __$emit__ .  
 Luego en el componente en que se quiera recibir esta data se debera hacer uso de __$on__ .   
 De esta forma entonces es posible enviar informacion desde cualquier componente hacia cualquier componente.  
 
 
