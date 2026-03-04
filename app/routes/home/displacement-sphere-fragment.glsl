#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

uniform float time;
varying vec2 vUv;
varying vec3 newPosition;
varying float noise;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// Function to convert HSL to RGB
vec3 hsl2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}

void main() {
    #include <clipping_planes_fragment>

    // We want a very smooth and slow color cycle. 
    // Increased the time modifier from 0.05 to 0.15 to make it a bit faster
    // but still smooth and visually appealing.
    float hue = fract(time * 0.15 + noise * 0.4 + vUv.x * 0.8 + vUv.y * 0.4);
    
    // Saturation and Lightness
    float saturation = 0.85;
    float lightness = 0.55 + noise * 0.15; // Subtle texture to the lightness
    
    // Calculate base color using HSL to RGB
    vec3 baseColor = hsl2rgb(vec3(hue, saturation, lightness));
    
    // Create a shock wave effect based on time and UV coordinates
    // We use a sine wave that propagates outwards
    float shockWaveSpeed = time * 2.5; // Speed of the wave
    float distance = length(vUv - vec2(0.5)); // Distance from center
    float shockWave = sin(distance * 30.0 - shockWaveSpeed);
    
    // Make the wave semi-visible and only pulse occasionally
    // By multiplying with a slower sine wave, we get periodic pulses
    float pulse = max(0.0, sin(time * 1.5));
    // Narrow down the wave peak to make it look sharp
    shockWave = smoothstep(0.9, 1.0, shockWave) * pulse * 0.3;
    
    // Add the shockwave as a white/bright highlight
    vec3 finalColor = baseColor + vec3(shockWave);
    
    vec4 diffuseColor = vec4(finalColor, 1.0);
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    vec3 totalEmissiveRadiance = emissive;

    #include <logdepthbuf_fragment>
    #include <map_fragment>
    #include <color_fragment>
    #include <alphamap_fragment>
    #include <alphatest_fragment>
    #include <alphahash_fragment>
    #include <specularmap_fragment>
    #include <normal_fragment_begin>
    #include <normal_fragment_maps>
    #include <emissivemap_fragment>

    // accumulation
    #include <lights_phong_fragment>
    #include <lights_fragment_begin>
    #include <lights_fragment_maps>
    #include <lights_fragment_end>

    // modulation
    #include <aomap_fragment>

    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

    #include <envmap_fragment>
    #include <opaque_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
    #include <premultiplied_alpha_fragment>
    #include <dithering_fragment>

    gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
