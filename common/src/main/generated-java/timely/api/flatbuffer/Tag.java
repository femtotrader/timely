// automatically generated by the FlatBuffers compiler, do not modify

package timely.api.flatbuffer;

import com.google.flatbuffers.BaseVector;
import com.google.flatbuffers.Constants;
import com.google.flatbuffers.FlatBufferBuilder;
import com.google.flatbuffers.Table;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

@SuppressWarnings("unused")
public final class Tag extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_23_5_26(); }
  public static Tag getRootAsTag(ByteBuffer _bb) { return getRootAsTag(_bb, new Tag()); }
  public static Tag getRootAsTag(ByteBuffer _bb, Tag obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public Tag __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public String key() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer keyAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer keyInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  public String value() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer valueAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer valueInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }

  public static int createTag(FlatBufferBuilder builder,
      int keyOffset,
      int valueOffset) {
    builder.startTable(2);
    Tag.addValue(builder, valueOffset);
    Tag.addKey(builder, keyOffset);
    return Tag.endTag(builder);
  }

  public static void startTag(FlatBufferBuilder builder) { builder.startTable(2); }
  public static void addKey(FlatBufferBuilder builder, int keyOffset) { builder.addOffset(0, keyOffset, 0); }
  public static void addValue(FlatBufferBuilder builder, int valueOffset) { builder.addOffset(1, valueOffset, 0); }
  public static int endTag(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public Tag get(int j) { return get(new Tag(), j); }
    public Tag get(Tag obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
