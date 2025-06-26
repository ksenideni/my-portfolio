<template>
  <div class="portfolio">
    <h2>Портфолио</h2>
    <div class="projects">
      <div class="project" v-for="project in projects" :key="project.name">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.github" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      projects: [
        {
          name: 'Система для потоковой обработки данных',
          description: 'Позволяет обрабатывать большие объемы данных в реальном времени. Поддерживает интеграцию с Kafka.',
          github: 'https://github.com/ksenideni/file-streamer'
        },
        {
          name: 'Бекенд для учета совместных расходов',
          description: 'Помогает в управлении расходами и финансами. Пользователи могут создавать группы, добавлять расходы и делиться ими с другими участниками.',
          github: 'https://github.com/ksenideni/cospend'
        },
        {
          name: 'Конвертер валют',
          description: 'Используется для конвертации валюты.',
          github: 'https://github.com/ksenideni/old-russian-measures-converter-tdd-app'
        },
        {
          name: 'Курсовая работа на тему "Приложение "Фитнесс-центр"',
          description: 'Позволяет пользователям записываться на тренировки, управлять своими записями и просматривать свои записи.',
          github: 'https://github.com/ksenideni/FitnessCenter'
        },
      ]
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/portfolio.css';
</style>