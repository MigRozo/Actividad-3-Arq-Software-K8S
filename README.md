# Actividad 3: Diplomado de Arquitectura de Software - Unisabana

## Trabajo K8S
Este repositorio contiene una aplicación académica diseñada para demostrar el flujo completo de Integración Continua (CI) y Despliegue Continuo (CD) utilizando prácticas modernas de DevOps y GitOps. La solución expone una API REST construida con Node.js y Express, automatiza su empaquetado mediante Docker y GitHub Actions, y gestiona su ciclo de vida en Kubernetes usando Helm y Argo CD.


## 1. Detalles del Proyecto
* **Entorno de Ejecución:** Node.js v22
* **Framework Backend:** Express.js
* **Contenedorización:** Docker
* **Orquestación:** Kubernetes (K8s)
* **Gestor de Paquetes K8s:** Helm v3
* **Estrategia CD / GitOps:** Argo CD
* **Automatización CI:** GitHub Actions


## 2. Flujo GitOps
Este repositorio actúa como la única fuente de verdad para el estado deseado de la infraestructura:

1.  **Código & CI:** Yo como desarrollador hago un `push` a la rama main. GitHub Actions compila la aplicación y construye la imagen Docker.
2.  **Registro:** La imagen resultante es etiquetada en el values.yaml de Helm.
3.  **Actualización de Manifiestos:** El pipeline de CI actualiza de forma automática los valores del Chart de **Helm** con la nueva versión de la imagen.
4.  **Sincronización:** Argo CD detecta el cambio en el repositorio de Git, compara el estado actual del clúster de **Kubernetes** con los manifiestos definidos, y sincroniza automáticamente los recursos para aplicar la nueva versión de la aplicación.


## 3. Requisitos Previos
* Node.js v22 y npm para desarrollo local.
* Docker Desktop instalado localmente.
* Kubernetes local habilitado en Docker Desktop.
* Helm v3.
* Argo CD configurado dentro del clúster de Kubernetes.


## 4. Desarrollo Local
Para inicializar el servidor Express de forma local:

```
npm install
npm start
````

## 5. Construcción con Docker
En mi caso, el nombre del contenedor es unisabana-microservicio y la version mas reciente es v1.0.5
```
docker build -t unisabana-microservicio:v1.0.5 .
```

## 6. Levantar Argo CD Dashboard en local
```
kubectl port-forward svc/argocd-server -n argocd 8080:443
````

## 7. Ejecutar el contenedor en K8s en local
```
kubectl port-forward svc/unisabana-microservicio 3000:3000
```
