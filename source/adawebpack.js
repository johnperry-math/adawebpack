
adawebpack = {

  __gnat_put_int: function (item) { console.log(item); },
  __gnat_put_char: function (item) { console.log(String.fromCharCode(item)); },
  __gnat_put_string: function (address,size) { console.log(String.fromCharCode.apply(null, new Uint8Array(instance.exports.memory.buffer, address, size))); },
  __gnat_put_f32: function (item) { console.log(item); },
  __gnat_put_f64: function (item) { console.log(item); },
  __gnat_put_exception: function (address,size,line) {
     msg = String.fromCharCode.apply(null, new Uint8Array(instance.exports.memory.buffer, address, size));
     if (line !== 0) {
        console.error("Predefined exception raised at %s:%i", msg, line);
     } else {
        console.error("User defined exception, message: %s", msg);
     }
  },

  __adawebpack__is_instance_of: function(identifier, address, size)
  {
    return from_wasm_object_identifier(identifier) instanceof window[string_to_js(address, size)];
  },

  __adawebpack__wasm__object_release: function (identifier)
  { console.log('Object released ' + identifier);
  },

  __adawebpack__bom__window__document: function ()
  {
    return to_wasm_object_identifier(window.document);
  },

  __adawebpack__cssom__Element__clientHeight_getter: function(identifier) {
    return from_wasm_object_identifier(identifier).clientHeight;
  },

  __adawebpack__cssom__Element__clientWidth_getter: function(identifier) {
    return from_wasm_object_identifier(identifier).clientWidth;
  },

  __adawebpack__cssom__Window__devicePixelRatio_getter: function() {
    return window.devicePixelRatio;
  },

  __adawebpack__dom__Document__getElementById: function (identifier, address, length)
  {
    return to_wasm_object_identifier(from_wasm_object_identifier(identifier).getElementById(string_to_js(address, length)));
  },

  __adawebpack__dom__Node__addEventListener: function (identifier, type_address, type_size, callback, capture)
  {
    from_wasm_object_identifier(identifier).addEventListener
     (string_to_js(type_address, type_size),
      function(e) { instance.exports.__adawebpack__dom__Node__dispatch_event (callback,to_wasm_object_identifier(e)); },
      capture !== 0);
  },

  __adawebpack__html__Button__disabled_getter: function(identifier) {
    return +from_wasm_object_identifier(identifier).disabled;
  },

  __adawebpack__html__Button__disabled_setter: function(identifier,to) {
    from_wasm_object_identifier (identifier).disabled = (to !== 0);
  },

  __adawebpack__html__Canvas__height_getter: function(identifier) {
    return from_wasm_object_identifier(identifier).height;
  },

  __adawebpack__html__Canvas__height_setter: function(identifier,to) {
    from_wasm_object_identifier(identifier).height = to;
  },

  __adawebpack__html__Canvas__getContext: function(identifier,address,size) {
    return to_wasm_object_identifier(from_wasm_object_identifier(identifier).getContext(string_to_js(address,size)));
  },

  __adawebpack__html__Canvas__width_getter: function(identifier) {
    return from_wasm_object_identifier(identifier).width;
  },

  __adawebpack__html__Canvas__width_setter: function(identifier,to) {
    from_wasm_object_identifier(identifier).width = to;
  },

  __adawebpack__html__Element__hidden_setter: function(identifier,to) {
    from_wasm_object_identifier (identifier).hidden = (to !== 0);
  },

  __adawebpack__html__Element__hidden_getter: function(identifier) {
    return +from_wasm_object_identifier(identifier).hidden;
  },

  __adawebpack__html__Script__text_getter: function(identifier) {
    return string_to_wasm(from_wasm_object_identifier(identifier).text);
  },

  __adawebpack__html__Script__text_setter: function(identifier,address,size) {
    from_wasm_object_identifier(identifier).text = string_to_js(address,size);
  },

  __adawebpack__html__Window__requestAnimationFrame: function(address) {
    return window.requestAnimationFrame(function(time){instance.exports.__adawebpack__html__Window__dispatch_animation_frame(address, time);});
  },

  __adawebpack__webgl__RenderingContext__attachShader: function(context_identifier,program_identifier,shader_identifier) {
    from_wasm_object_identifier(context_identifier).attachShader(from_wasm_object_identifier(program_identifier), from_wasm_object_identifier(shader_identifier));
  },

  __adawebpack__webgl__RenderingContext__bindBuffer: function(context_identifier,target,buffer_identifier) {
    from_wasm_object_identifier(context_identifier).bindBuffer(target, from_wasm_object_identifier(buffer_identifier));
  },

  __adawebpack__webgl__RenderingContext__bufferData: function(context_identifier,target,size,data,usage) {
    from_wasm_object_identifier(context_identifier).bufferData(target, new Uint8Array(instance.exports.memory.buffer,data,size), usage);
  },

  __adawebpack__webgl__RenderingContext__clear: function(identifier,mask) {
    from_wasm_object_identifier(identifier).clear(mask);
  },

  __adawebpack__webgl__RenderingContext__clearColor: function(identifier,red,green,blue,alpha) {
    from_wasm_object_identifier(identifier).clearColor(red,green,blue,alpha);
  },

  __adawebpack__webgl__RenderingContext__clearDepth: function(identifier,depth) {
    from_wasm_object_identifier(identifier).clearDepth(depth);
  },

  __adawebpack__webgl__RenderingContext__compileShader: function(context_identifier,shader_identifier) {
    from_wasm_object_identifier(context_identifier).compileShader(from_wasm_object_identifier(shader_identifier));
  },

  __adawebpack__webgl__RenderingContext__createBuffer: function(identifier) {
    return to_wasm_object_identifier(from_wasm_object_identifier(identifier).createBuffer());
  },

  __adawebpack__webgl__RenderingContext__createProgram: function(identifier) {
    return to_wasm_object_identifier(from_wasm_object_identifier(identifier).createProgram());
  },

  __adawebpack__webgl__RenderingContext__createShader: function(identifier,type) {
    return to_wasm_object_identifier(from_wasm_object_identifier(identifier).createShader(type));
  },

  __adawebpack__webgl__RenderingContext__depthFunc: function(identifier,func) {
    from_wasm_object_identifier(identifier).depthFunc(func);
  },

  __adawebpack__webgl__RenderingContext__drawArrays: function(identifier,mode,first,count) {
    from_wasm_object_identifier(identifier).drawArrays(mode,first,count);
  },

  __adawebpack__webgl__RenderingContext__drawElements: function(identifier,mode,count,type,offset) {
    from_wasm_object_identifier(identifier).drawElements(mode,count,type,offset);
  },

  __adawebpack__webgl__RenderingContext__enableVertexAttribArray: function(context_identifier,index) {
    from_wasm_object_identifier(context_identifier).enableVertexAttribArray(index);
  },

  __adawebpack__webgl__RenderingContext__finish: function(context_identifier) {
    from_wasm_object_identifier(context_identifier).finish();
  },

  __adawebpack__webgl__RenderingContext__flush: function(context_identifier) {
    from_wasm_object_identifier(context_identifier).flush();
  },

  __adawebpack__webgl__RenderingContext__getAttribLocation: function(context_identifier,program_identifier,name_address,name_size) {
    return from_wasm_object_identifier(context_identifier).getAttribLocation(from_wasm_object_identifier(program_identifier), string_to_js(name_address, name_size));
  },

  __adawebpack__webgl__RenderingContext__getUniformLocation: function(context_identifier,program_identifier,name_address,name_size) {
    return to_wasm_object_identifier(from_wasm_object_identifier(context_identifier).getUniformLocation(from_wasm_object_identifier(program_identifier),string_to_js(name_address,name_size)));
  },

  __adawebpack__webgl__RenderingContext__linkProgram: function(context_identifier,program_identifier) {
    from_wasm_object_identifier(context_identifier).linkProgram(from_wasm_object_identifier(program_identifier));
  },

  __adawebpack__webgl__RenderingContext__shaderSource: function(context_identifier,shader_identifier,source_address,source_size) {
    from_wasm_object_identifier(context_identifier).shaderSource(from_wasm_object_identifier(shader_identifier),string_to_js(source_address,source_size));
  },

  __adawebpack__webgl__RenderingContext__uniform1i: function(context_identifier,location_identifier,x) {
    from_wasm_object_identifier(context_identifier).uniform1i(from_wasm_object_identifier(location_identifier),x);
  },

  __adawebpack__webgl__RenderingContext__uniform1f: function(context_identifier,location_identifier,x) {
    from_wasm_object_identifier(context_identifier).uniform1f(from_wasm_object_identifier(location_identifier),x);
  },

  __adawebpack__webgl__RenderingContext__uniform2fv: function(context_identifier,location_identifier,value_address) {
    from_wasm_object_identifier(context_identifier).uniform2fv(from_wasm_object_identifier(location_identifier), new Float32Array(instance.exports.memory.buffer,value_address,2));
  },

  __adawebpack__webgl__RenderingContext__uniform3fv: function(context_identifier,location_identifier,value_address) {
    from_wasm_object_identifier(context_identifier).uniform3fv(from_wasm_object_identifier(location_identifier), new Float32Array(instance.exports.memory.buffer,value_address,3));
  },

  __adawebpack__webgl__RenderingContext__uniform4fv: function(context_identifier,location_identifier,value_address) {
    from_wasm_object_identifier(context_identifier).uniform4fv(from_wasm_object_identifier(location_identifier), new Float32Array(instance.exports.memory.buffer,value_address,4));
  },

  __adawebpack__webgl__RenderingContext__uniformMatrix2fv: function(context_identifier,location_identifier,transpose,value_address) {
    from_wasm_object_identifier(context_identifier).uniformMatrix2fv(from_wasm_object_identifier(location_identifier),transpose!==0, new Float32Array(instance.exports.memory.buffer,value_address,4));
  },

  __adawebpack__webgl__RenderingContext__uniformMatrix3fv: function(context_identifier,location_identifier,transpose,value_address) {
    from_wasm_object_identifier(context_identifier).uniformMatrix3fv(from_wasm_object_identifier(location_identifier),transpose!==0, new Float32Array(instance.exports.memory.buffer,value_address,9));
  },

  __adawebpack__webgl__RenderingContext__uniformMatrix4fv: function(context_identifier,location_identifier,transpose,value_address) {
    from_wasm_object_identifier(context_identifier).uniformMatrix4fv(from_wasm_object_identifier(location_identifier),transpose!==0, new Float32Array(instance.exports.memory.buffer,value_address,16));
  },

  __adawebpack__webgl__RenderingContext__useProgram: function(context_identifier,program_identifier) {
    from_wasm_object_identifier(context_identifier).useProgram(from_wasm_object_identifier(program_identifier));
  },

  __adawebpack__webgl__RenderingContext__vertexAttribPointer: function(context_identifier,index,size,type,normalized,stride,offset) {
    from_wasm_object_identifier(context_identifier).vertexAttribPointer(index,size,type,normalized !== 0,stride,offset);
  },

  __adawebpack__webgl__RenderingContext__viewport: function(context_identifier,x,y,width,height) {
    from_wasm_object_identifier(context_identifier).viewport(x,y,width,height);
  }

};

var obj2id = new Map();
var id2obj = new Map();
var last_id = 0;

function to_wasm_object_identifier(obj)
{
  if (obj2id.has(obj))
  {
    return obj2id.get(obj);
  } else {
    last_id++;
    obj2id.set(obj, last_id);
    id2obj.set(last_id, obj);
    return last_id;
  }
}

function from_wasm_object_identifier(identifier)
{
  return id2obj.get(identifier);
}

function string_to_js(address, size)
{
  return String.fromCharCode.apply(null, new Uint16Array(instance.exports.memory.buffer, address, size));
}

function string_to_wasm(item)
{
  s = instance.exports.__adawebpack__core__allocate_string(item.length);
  a = new Uint16Array(instance.exports.memory.buffer, s, item.length);
  for(var i=0, l=item.length; i < l; i++) {
    a[i] = item.charCodeAt(i);
  }
  return s;
}
