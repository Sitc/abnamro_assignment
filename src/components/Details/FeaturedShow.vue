<template>
  <div>
    <section
      :style="{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: item.image.original
          ? `url(${item.image.original})`
          : 'url(https://via.placeholder.com/300x400)',
      }"
    >
      <div class="featured--horizontal-transparency">
        <div class="featured--vertical-transparency">
          <h1 class="featured--title">{{ item.name }}</h1>
          <div class="featured--info">
            <div class="featured--votes">
              Average ratings: {{ item.rating.average }}
            </div>
            <br />
            <div class="featured--year">Premiered: {{ item.premiered }}</div>
            <div class="featured--description">
              <p v-html="item.summary" />
            </div>
          </div>
          <div class="featured--genres">
            <strong>Genres:</strong>
            {{ genres }}
          </div>
          <div class="featured--action">
            <button class="featured--button-back">
              <router-link to="/"> &lt; Back to home page </router-link>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
>

<script>
export default {
  props: {
    item: null,
  },
  computed: {
    genres() {
      return this.item.genres.join(", ");
    },
  },
  created() {
    if (!this.item) {
      this.getSelectedShow();
    }
  },
};
</script>

<style scoped lang="css">
.featured--horizontal-transparency {
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
}

.featured--vertical-transparency {
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 100px;
  padding-top: 70px;
}

.featured--button-back {
  max-width: 50px;
  all: unset;
  cursor: pointer;
  background-color: #fff;
  color: var(--background-light);
  margin-top: 15px;
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;
}

.featured--button-back:hover {
  opacity: 0.7;
}

a {
  all: unset;
  color: var(--text-dark);
}

.featured--title {
  color: var(--text-light);
  font-size: 60px;
  font-weight: bold;
}

.featured--info {
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
}

.featured--votes,
.featured--year,
.featured--seasons {
  color: #999;
  display: inline-block;
  margin-right: 15px;
}

.featured--votes {
  color: #46d369;
  font-size: 16px;
}

.featured--description {
  margin-top: 15px;
  font-size: 20px;
  font-weight: 300;
  color: #999;
  max-width: 40%;
}

.featured--buttons {
  margin-top: 15px;
}

.featured--watch,
.featured--infobtn {
  display: inline-block;
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;
}

.featured--watch:hover,
.featured--infobtn:hover {
  opacity: 0.7;
}

.featured--watch {
  background-color: #fff;
  color: #000;
}

.featured--infobtn {
  background-color: #333;
  color: #fff;
}

.featured--genres {
  margin-top: 15px;
  font-size: 15px;
  color: #999;
}

@media (max-width: 760px) {
  .featured {
    height: 90vh;
  }
  .featured--title {
    font-size: 40px;
  }
  .featured--info {
    font-size: 16px;
  }
  .featured--description {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }

  .featured--watch,
  .featured--infobtn {
    font-size: 16px;
  }
}
</style>
