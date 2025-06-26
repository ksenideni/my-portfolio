<template>
  <div class="about">
    <h2>Обо мне</h2>

    <p>
      Я Java/Kotlin-разработчик. 
    </p>

    <h3>Навыки</h3>
    <ul class="skills">
      <li><strong>Языки:</strong> Kotlin, Java (Spring Boot), SQL, JavaScript</li>
      <li><strong>Фреймворки:</strong> Spring Boot, Hibernate, Vue.js, REST API</li>
      <li><strong>Базы данных:</strong> PostgreSQL, Oracle, Redis</li>
      <li><strong>Интеграции:</strong> REST, Kafka</li>
      <li><strong>Инструменты:</strong> Git, Maven, Gradle, Docker, Jira, Swagger</li>
      <li><strong>Безопасность:</strong> Spring Security, OAuth2, JWT</li>
      <li><strong>Тестирование:</strong> JUnit, Mockito, TestContainers, Postman</li>
      <li><strong>CI/CD:</strong> GitLab CI, GitHub Actions</li>
      <li><strong>Мониторинг:</strong> Prometheus, Grafana</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
}

h2, h3 {
  color: #2c3e50;
}

.skills li {
  margin-bottom: 10px;
}
</style>