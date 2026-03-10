import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <hr />
      <h2 className="h2 my-10">Profile</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="h3">Profile</h3>
          <dl class="divide-y divide-white/10 mt-5">
            <div class="grid grid-cols-3 gap-4">
              <dt class="text-lg font-semibold text-zinc-950">Doğum tarihi</dt>
              <dd class="text-lg text-zinc-950 col-span-2">24.03.1996</dd>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <dt class="text-lg font-semibold text-zinc-950">İkamet Şehri</dt>
              <dd class="text-lg text-zinc-950 col-span-2">Ankara</dd>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <dt class="text-lg font-semibold text-zinc-950">Eğitim Durumu</dt>
              <dd class="text-lg text-zinc-950 col-span-2">
                Hacettepe Ünv. Biyoloji Lisans, 2016
              </dd>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <dt class="text-lg font-semibold text-zinc-950">
                Tercih Ettiği Rol
              </dt>
              <dd class="text-lg text-zinc-950 col-span-2">Frontend, UI</dd>
            </div>
          </dl>
        </div>
        <div className="xl:col-span-2">
          <h3 className="h3">About Me</h3>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Profile;
