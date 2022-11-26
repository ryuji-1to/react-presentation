import { Slide } from '../../template/Slide';

export const LineHeight = () => {
  return (
    <Slide animation="fadeIn" position="center" slideTitle="Line Height">
      <div className="space-y-10 text-2xl w-[360px]">
        <p className="leading-none">
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        </p>
        <p className="leading-[1.6]">
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        </p>
        <p className="leading-loose">
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        </p>
      </div>
    </Slide>
  );
};
